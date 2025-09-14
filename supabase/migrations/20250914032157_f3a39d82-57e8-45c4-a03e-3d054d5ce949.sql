-- Add additional columns to existing products table for ShopXi features
ALTER TABLE public.products 
ADD COLUMN IF NOT EXISTS suitable_body_types TEXT[],
ADD COLUMN IF NOT EXISTS occasion TEXT,
ADD COLUMN IF NOT EXISTS material TEXT,
ADD COLUMN IF NOT EXISTS care_instructions TEXT,
ADD COLUMN IF NOT EXISTS style_tags TEXT[];

-- Update products table with better defaults
ALTER TABLE public.products 
ALTER COLUMN suitable_body_types SET DEFAULT '{}',
ALTER COLUMN style_tags SET DEFAULT '{}';

-- Create user profiles table for AI recommendations
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  full_name TEXT,
  age INTEGER,
  gender TEXT,
  body_type TEXT,
  preferred_size TEXT,
  preferred_style TEXT[],
  skin_tone TEXT,
  height_cm INTEGER,
  weight_kg INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for user profiles
CREATE POLICY "Users can view their own profile" 
ON public.user_profiles 
FOR SELECT 
USING (auth.uid()::text = user_id);

CREATE POLICY "Users can create their own profile" 
ON public.user_profiles 
FOR INSERT 
WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.user_profiles 
FOR UPDATE 
USING (auth.uid()::text = user_id);

-- Create wishlist table
CREATE TABLE IF NOT EXISTS public.wishlists (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for wishlists
ALTER TABLE public.wishlists ENABLE ROW LEVEL SECURITY;

-- Create policies for wishlists
CREATE POLICY "Users can view their own wishlist" 
ON public.wishlists 
FOR SELECT 
USING (auth.uid()::text = user_id);

CREATE POLICY "Users can manage their own wishlist" 
ON public.wishlists 
FOR ALL 
USING (auth.uid()::text = user_id);

-- Create reward points table
CREATE TABLE IF NOT EXISTS public.user_rewards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  total_points INTEGER NOT NULL DEFAULT 0,
  points_earned INTEGER NOT NULL DEFAULT 0,
  points_redeemed INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for rewards
ALTER TABLE public.user_rewards ENABLE ROW LEVEL SECURITY;

-- Create policies for rewards
CREATE POLICY "Users can view their own rewards" 
ON public.user_rewards 
FOR SELECT 
USING (auth.uid()::text = user_id);

CREATE POLICY "Users can create their own rewards record" 
ON public.user_rewards 
FOR INSERT 
WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update their own rewards" 
ON public.user_rewards 
FOR UPDATE 
USING (auth.uid()::text = user_id);

-- Create outfit recommendations table
CREATE TABLE IF NOT EXISTS public.outfit_recommendations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  primary_product_id UUID REFERENCES public.products(id),
  recommended_products UUID[],
  occasion TEXT,
  total_price NUMERIC,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for outfit recommendations
ALTER TABLE public.outfit_recommendations ENABLE ROW LEVEL SECURITY;

-- Create policies for outfit recommendations
CREATE POLICY "Users can view their own recommendations" 
ON public.outfit_recommendations 
FOR SELECT 
USING (auth.uid()::text = user_id);

CREATE POLICY "Anyone can create recommendations" 
ON public.outfit_recommendations 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for updated_at on user_profiles
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_user_profiles_updated_at
BEFORE UPDATE ON public.user_profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_rewards_updated_at
BEFORE UPDATE ON public.user_rewards
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();