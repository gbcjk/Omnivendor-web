
export enum Role {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  BUYER = 'BUYER'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  DISPUTED = 'DISPUTED'
}

export interface PasswordResetRequest {
  id: string;
  userId: string;
  userEmail: string;
  userName: string;
  requestDeviceId: string; // The SHA-256 hash of the device requesting reset
  isMatch: boolean; // Computed: does it match user.registeredDeviceId
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'COMPLETED';
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'ORDER' | 'PRODUCT' | 'SYSTEM' | 'SECURITY';
  read: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  isVerified?: boolean;
  isSuspended?: boolean;
  registeredDeviceId?: string; // The SHA-256 hash of the device used during registration
  
  phone?: string;
  address?: string;
  bio?: string;
  
  professionalHeadline?: string;
  professionalExperience?: string;
  
  storeName?: string;
  storeDescription?: string;
  bankDetails?: string;
  esewaQR?: string; 
  
  createdAt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  stock: number;
  attributes: { [key: string]: string };
}

export interface Product {
  id: string;
  sellerId: string;
  sellerName: string;
  name: string;
  description: string;
  category: string;
  basePrice: number;
  discountPrice?: number;
  images: string[];
  variants: ProductVariant[];
  isApproved: boolean;
  isActive: boolean;
  createdAt: string;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  product: Product;
  variant: ProductVariant;
}

export interface Order {
  id: string;
  buyerId: string;
  buyerName: string;
  sellerId: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  shippingAddress: string;
  paymentMethod: 'COD' | 'ONLINE';
  paymentDetails?: string; 
  trackingNumber?: string;
  createdAt: string;
}

export interface SiteSettings {
  siteName: string;
  logo: string;
  themeColor: string;
  announcement: string;
  isMaintenance: boolean;
  adminAccessKey: string;
}
