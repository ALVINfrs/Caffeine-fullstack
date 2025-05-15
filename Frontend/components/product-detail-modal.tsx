"use client";

import type React from "react";

import { useState } from "react";
import { X, ShoppingCart, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductDetailModal({
  isOpen,
  onClose,
  product,
}: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (product) {
      console.log("Adding product to cart from modal:", product);
      console.log("Product image URL:", product.image);

      addToCart(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          // Preserve original image path
          image: product.image || "/placeholder.svg",
        },
        quantity
      );

      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} added to your cart`,
      });

      // Reset quantity and close modal
      setQuantity(1);
      onClose();
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Handle clicking outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white dark:bg-gray-900 rounded-lg w-full max-w-4xl overflow-hidden shadow-xl">
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 z-10"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-64 md:h-full min-h-[300px] bg-gray-100 dark:bg-gray-800">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h2>
            <p className="text-xl font-semibold text-amber-600 mt-2">
              Rp. {product.price.toLocaleString()}
            </p>

            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Description
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-center mb-4">
                <button
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={decrementQuantity}
                >
                  <Minus size={16} />
                </button>
                <span className="mx-4 font-medium text-gray-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={incrementQuantity}
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md flex items-center justify-center transition-colors"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
