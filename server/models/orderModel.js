import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to User Model
      required: true,
    },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String }, 
      },
    ],
    totalAmount: { type: Number, required: true }, 
    discount: { type: Number, default: 0 }, // Discount applied (if any)
    tax: { type: Number, default: 0 }, // Tax amount
    finalAmount: { type: Number, required: true }, // Final amount after tax & discount

    // Payment Details
    payment: {
      method: {
        type: String,
        enum: ["Credit Card", "Debit Card", "UPI", "Net Banking", "COD"], // Payment options
        required: true,
      },
      transactionId: { type: String, required: function () { return this.payment.method !== "COD"; } }, // Store transaction ID if online payment
      bankDetails: {
        bankName: { type: String }, // Bank Name (If paid via net banking)
        accountNumber: { type: String }, // Masked Account No.
        UPIId: { type: String }, // UPI ID (if UPI payment)
      },
      paymentStatus: {
        type: String,
        enum: ["Pending", "Completed", "Failed", "Refunded"],
        default: "Pending",
      },
    },

    // Shipping & Delivery Details
    shipping: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      zipcode: { type: String, required: true },
      contactNumber: { type: String, required: true },
      deliveryStatus: {
        type: String,
        enum: ["Processing", "Shipped", "Out for Delivery", "Delivered", "Cancelled"],
        default: "Processing",
      },
      trackingId: { type: String }, // Tracking number for shipment
      expectedDelivery: { type: Date }, // Estimated delivery date
    },

    orderStatus: {
      type: String,
      enum: ["Placed", "Confirmed", "Cancelled", "Completed"],
      default: "Placed",
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
