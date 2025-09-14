import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingBag, 
  Scan, 
  Mic, 
  Camera, 
  Star, 
  Users, 
  Gift, 
  Brain,
  Accessibility,
  QrCode,
  Heart,
  Search,
  Filter,
  Menu,
  X
} from 'lucide-react';
import { toast } from 'sonner';

// Import generated images
import heroImage from '@/assets/shopxi-hero.jpg';
import aiAssistantIcon from '@/assets/ai-assistant-icon.jpg';
import digitalMirrorIcon from '@/assets/digital-mirror-icon.jpg';
import voiceAccessIcon from '@/assets/voice-access-icon.jpg';
import dressImage from '@/assets/products/dress-1.jpg';
import shirtImage from '@/assets/products/shirt-1.jpg';

const Index = () => {
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "AI Style Recommendations",
      description: "Get personalized clothing suggestions based on your body type, gender, and preferences",
      image: aiAssistantIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Gift,
      title: "Festival Collections",
      description: "Discover curated outfits for every occasion - Diwali, Christmas, weddings, and more",
      image: null,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: QrCode,
      title: "Smart Barcode Scanner",
      description: "Instantly scan products to view details, prices, materials, and check availability",
      image: null,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Camera,
      title: "Digital Mirror",
      description: "Virtual try-on technology to see how clothes look on you before buying",
      image: digitalMirrorIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Accessibility,
      title: "Voice Shopping Assistant",
      description: "Complete voice-guided shopping experience for visually impaired users",
      image: voiceAccessIcon,
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Star,
      title: "Smart Rewards",
      description: "Earn points with every purchase and unlock exclusive benefits and discounts",
      image: null,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const demoProducts = [
    {
      id: 1,
      name: "Elegant Evening Dress",
      price: 2499,
      originalPrice: 3499,
      image: dressImage,
      category: "Women's Fashion",
      rating: 4.8,
      reviews: 124,
      bodyTypes: ["Hourglass", "Pear", "Rectangle"],
      festivals: ["Wedding", "Party"],
      inStock: true
    },
    {
      id: 2,
      name: "Classic Cotton Shirt",
      price: 1299,
      originalPrice: 1699,
      image: shirtImage,
      category: "Men's Fashion",
      rating: 4.6,
      reviews: 89,
      bodyTypes: ["Athletic", "Slim", "Regular"],
      festivals: ["Office", "Casual"],
      inStock: true
    }
  ];

  const handleAddToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
    toast.success("Added to cart! 🛒", {
      description: "Product has been added to your shopping cart."
    });
  };

  const handleVoiceToggle = () => {
    setIsVoiceMode(!isVoiceMode);
    if (!isVoiceMode) {
      setIsAccessibilityMode(true);
      toast.success("Voice assistant activated! 🎤", {
        description: "Speak naturally to browse products and add items to cart."
      });
    } else {
      setIsAccessibilityMode(false);
      toast.info("Voice assistant deactivated.");
    }
  };

  const handleScanBarcode = () => {
    toast.info("Barcode scanner opening... 📱", {
      description: "Point your camera at any product barcode to get instant details."
    });
  };

  const handleDigitalMirror = () => {
    toast.info("Digital Mirror launching... 🪞", {
      description: "Upload your photo or use camera to try on outfits virtually."
    });
  };

  return (
    <div className={`min-h-screen ${isAccessibilityMode ? 'accessibility-mode' : ''}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-gradient-primary">ShopXi</h1>
              <Badge variant="secondary" className="hidden sm:inline-flex">AI-Powered</Badge>
            </div>

            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleVoiceToggle}
                className={isVoiceMode ? 'bg-primary text-primary-foreground' : ''}
              >
                <Mic className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleScanBarcode}>
                <Scan className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="ShopXi Hero" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Shopping Experience</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to the Future of 
              <span className="text-gradient-secondary block">Smart Shopping</span>
            </h1>
            
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience next-generation retail with AI recommendations, voice shopping, 
              digital try-ons, and inclusive accessibility features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="animate-float">
                Start AI Shopping
                <Brain className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="xl" onClick={handleDigitalMirror}>
                Try Virtual Mirror
                <Camera className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>10K+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Accessibility className="w-4 h-4" />
                <span>100% Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Revolutionary Shopping Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience shopping like never before with our cutting-edge AI technology 
              and accessibility-first design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:animate-float`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                {feature.image && (
                  <CardContent>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-32 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              AI-Curated Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI analyzes your preferences, body type, and occasion to recommend 
              the perfect products just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {demoProducts.map((product) => (
              <Card key={product.id} className="product-card">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                  <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-card/80 hover:bg-card"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.bodyTypes.slice(0, 2).map((type) => (
                      <Badge key={type} variant="secondary" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                    {product.festivals.slice(0, 2).map((festival) => (
                      <Badge key={festival} variant="outline" className="text-xs">
                        {festival}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex gap-2">
                    <Button 
                      variant="cart" 
                      className="flex-1"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      Add to Cart
                      <ShoppingBag className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" onClick={handleDigitalMirror}>
                      Try On
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of shoppers who've discovered the future of retail with ShopXi's 
            AI-powered features and accessibility-first design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Shopping Now
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" onClick={handleVoiceToggle}>
              Try Voice Assistant
              <Mic className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-gradient-primary">ShopXi</span>
              </div>
              <p className="text-muted-foreground">
                Next-generation AI-powered retail shopping with accessibility at its core.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI Recommendations</li>
                <li>Digital Mirror</li>
                <li>Voice Shopping</li>
                <li>Barcode Scanner</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Accessibility</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Voice Navigation</li>
                <li>Screen Reader Support</li>
                <li>High Contrast Mode</li>
                <li>Keyboard Navigation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Feedback</li>
                <li>Accessibility Help</li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ShopXi. Built with AI for everyone.</p>
          </div>
        </div>
      </footer>

      {/* Voice Mode Indicator */}
      {isVoiceMode && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="ai-assistant-bubble animate-pulse-glow">
            <div className="flex items-center gap-2">
              <Mic className="w-4 h-4 animate-bounce" />
              <span className="text-sm font-medium">Listening...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
