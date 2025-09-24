'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description:
        'Streamline workflows with intelligent automation that learns from your business patterns and optimizes operations.',
      badge: 'AI Technology',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOC 2 Type II compliant with advanced encryption, multi-factor authentication, and comprehensive audit trails.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description:
        'Native mobile apps and responsive web interface ensure seamless productivity across all devices.',
      badge: 'Mobility',
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description:
        '99.99% uptime SLA with multi-region deployment and automatic failover protection worldwide.',
      badge: 'Reliability',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Advanced business intelligence with customizable dashboards and predictive insights for data-driven decisions.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'White-Label Solutions',
      description:
        'Complete brand customization with custom domains, logos, and styling to match your corporate identity.',
      badge: 'Branding',
    },
    {
      icon: Code2,
      title: 'Developer APIs',
      description:
        'RESTful APIs, webhooks, and SDKs with comprehensive documentation for seamless third-party integrations.',
      badge: 'Integration',
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description:
        'Dedicated customer success managers with 24/7 technical support and guaranteed response times.',
      badge: 'Support',
    },
    {
      icon: Lock,
      title: 'Data Sovereignty',
      description:
        'GDPR compliant with data residency controls and complete ownership of your business information.',
      badge: 'Compliance',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewFeatures = () => {
    window.location.href = '/features';
  };

  const handleGetDemo = () => {
    window.location.href = '/demo';
  };

  const handleContactSales = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            Platform Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade Features for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acme SaaS delivers cutting-edge technology solutions designed to accelerate growth,
            enhance productivity, and scale with your business needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-secondary/50">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-0">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <div className="max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-background/50 text-primary border-primary/30"
            >
              Ready to Transform Your Business?
            </Badge>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Join 10,000+ Companies Already Using
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Acme SaaS Platform
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Start your 14-day free trial today and experience the power of next-generation
              business automation. No credit card required, full access to all features.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleStartTrial}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[200px]"
              >
                Start Free Trial
              </button>
              <button
                onClick={handleGetDemo}
                className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-all duration-300 hover:scale-105 bg-background/50 backdrop-blur-sm min-w-[200px]"
              >
                Schedule Demo
              </button>
            </div>

            {/* Additional CTA Info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="size-4 text-primary" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-primary" />
                <span>Instant Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="size-4 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Contact Sales Link */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-muted-foreground mb-3">Need a custom enterprise solution?</p>
              <button
                onClick={handleContactSales}
                className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
              >
                Contact Sales Team →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
