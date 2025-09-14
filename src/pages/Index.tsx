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

// Force rebuild to clear Vite cache

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
    <div className={`min-h-screen ${isAccessibilityMode ? 'accessibility-mode' : ''} relative`}>
      {/* Floating Shapes Background */}
      <div className="floating-shapes fixed inset-0 pointer-events-none z-0">
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-slide-in-left">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-glow animate-rotate-slow">
                <ShoppingBag className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold font-display text-gradient-primary">ShopXi</h1>
              <Badge variant="secondary" className="hidden sm:inline-flex animate-bounce-in animate-stagger-3">AI-Powered</Badge>
            </div>

            <div className="flex items-center gap-3 animate-slide-in-right">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleVoiceToggle}
                className={`interactive-button transition-all duration-300 ${isVoiceMode ? 'bg-primary text-primary-foreground shadow-glow animate-pulse-glow' : 'hover:shadow-medium'}`}
              >
                <Mic className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleScanBarcode} className="interactive-button hover:shadow-medium">
                <Scan className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="relative interactive-button hover:shadow-medium">
                <ShoppingBag className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center text-xs animate-bounce-in bg-gradient-to-r from-accent to-warning">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden py-24 lg:py-40">
        <div className="absolute inset-0 bg-hero-gradient">
          <img 
            src={heroImage} 
            alt="ShopXi Hero" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-glass rounded-full px-6 py-3 mb-8 animate-fade-in">
              <Brain className="w-5 h-5 animate-pulse-glow" />
              <span className="text-sm font-medium font-mono">Next-Generation AI Shopping Experience</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-8 leading-tight animate-fade-in-up animate-stagger-2">
              Welcome to the Future of 
              <span className="text-gradient-rainbow block mt-2 animate-stagger-3">Smart Shopping</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-4">
              Experience next-generation retail with AI recommendations, voice shopping, 
              digital try-ons, and inclusive accessibility features that revolutionize how you shop.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animate-stagger-5">
              <Button variant="hero" size="xl" className="animate-float font-semibold text-lg px-8 py-4 shadow-glow-lg">
                Start AI Shopping Journey
                <Brain className="w-6 h-6" />
              </Button>
              <Button variant="glass" size="xl" onClick={handleDigitalMirror} className="font-semibold text-lg px-8 py-4 hover:shadow-glow">
                Try Virtual Mirror
                <Camera className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-12 mt-16 text-base opacity-80 animate-fade-in-up animate-stagger-6">
              <div className="flex items-center gap-3 animate-bounce-in animate-stagger-1">
                <div className="w-12 h-12 bg-glass rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <span className="font-semibold">10K+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-3 animate-bounce-in animate-stagger-2">
                <div className="w-12 h-12 bg-glass rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-3 animate-bounce-in animate-stagger-3">
                <div className="w-12 h-12 bg-glass rounded-full flex items-center justify-center">
                  <Accessibility className="w-6 h-6" />
                </div>
                <span className="font-semibold">100% Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6 text-gradient-primary">
              Revolutionary Shopping Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience shopping like never before with our cutting-edge AI technology 
              and accessibility-first design that puts you in control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className={`feature-card group hover:scale-105 transition-all duration-500 animate-fade-in-up animate-stagger-${index + 1}`}>
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:animate-float shadow-glow`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3 font-display group-hover:text-gradient-primary transition-all">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                {feature.image && (
                  <CardContent className="relative z-10">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-40 object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-all duration-500 shadow-medium"
                    />
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6 text-gradient-primary">
              AI-Curated Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI analyzes your preferences, body type, and occasion to recommend 
              the perfect products just for you with unprecedented accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {demoProducts.map((product, index) => (
              <Card key={product.id} className={`product-card group animate-fade-in-up animate-stagger-${index + 1}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground shadow-medium animate-bounce-in">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-glass hover:bg-card shadow-medium interactive-button"
                  >
                    <Heart className="w-5 h-5 hover:text-wishlist transition-colors" />
                  </Button>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-xl font-display group-hover:text-gradient-primary transition-all">{product.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{product.rating}</span>
                      <span className="text-muted-foreground">({product.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-primary font-display">₹{product.price}</span>
                    <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice}</span>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {product.bodyTypes.slice(0, 2).map((type) => (
                      <Badge key={type} variant="secondary" className="text-sm px-3 py-1 shadow-soft">
                        {type}
                      </Badge>
                    ))}
                    {product.festivals.slice(0, 2).map((festival) => (
                      <Badge key={festival} variant="outline" className="text-sm px-3 py-1 shadow-soft">
                        {festival}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex gap-3">
                    <Button 
                      variant="cart" 
                      className="flex-1 interactive-button font-semibold shadow-medium hover:shadow-glow"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      Add to Cart
                      <ShoppingBag className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" onClick={handleDigitalMirror} className="interactive-button font-semibold shadow-soft hover:shadow-medium">
                      Try On
                      <Camera className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-8 text-gradient-primary animate-fade-in-up">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-2">
            Join thousands of shoppers who've discovered the future of retail with ShopXi's 
            AI-powered features and accessibility-first design that makes shopping a joy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-stagger-3">
            <Button variant="hero" size="xl" className="font-semibold text-lg px-10 py-5 shadow-glow-lg animate-float">
              Start Shopping Now
              <ShoppingBag className="w-6 h-6" />
            </Button>
            <Button variant="outline" size="xl" onClick={handleVoiceToggle} className="font-semibold text-lg px-10 py-5 shadow-medium hover:shadow-glow">
              Try Voice Assistant
              <Mic className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-glass border-t backdrop-blur-xl py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-glow">
                  <ShoppingBag className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-3xl font-bold font-display text-gradient-primary">ShopXi</span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Next-generation AI-powered retail shopping with accessibility at its core.
              </p>
            </div>

            <div className="animate-fade-in-up animate-stagger-2">
              <h3 className="font-semibold mb-6 text-lg font-display">Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">AI Recommendations</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Digital Mirror</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Voice Shopping</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Barcode Scanner</li>
              </ul>
            </div>

            <div className="animate-fade-in-up animate-stagger-3">
              <h3 className="font-semibold mb-6 text-lg font-display">Accessibility</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Voice Navigation</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Screen Reader Support</li>
                <li className="hover:text-primary transition-colors cursor-pointer">High Contrast Mode</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Keyboard Navigation</li>
              </ul>
            </div>

            <div className="animate-fade-in-up animate-stagger-4">
              <h3 className="font-semibold mb-6 text-lg font-display">Support</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Feedback</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Accessibility Help</li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 mt-12 text-center text-muted-foreground animate-fade-in-up animate-stagger-5">
            <p className="text-lg">&copy; 2024 ShopXi. Built with AI for everyone. 🚀✨</p>
          </div>
        </div>
      </footer>

      {/* Enhanced Voice Mode Indicator */}
      {isVoiceMode && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="ai-assistant-bubble animate-pulse-glow shadow-glow-lg">
            <div className="flex items-center gap-3">
              <Mic className="w-5 h-5 animate-bounce" />
              <span className="text-base font-semibold">Listening...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
