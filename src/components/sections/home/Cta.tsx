'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  Shield,
  CheckCircle,
  TrendingUp,
  Clock,
  Globe,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Cta() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/temp');
  };
  const handleSecondaryAction = () => {
    router.push('/temp');
  };
  // ACTION_PLACEHOLDER_END

  const stats = [
    { value: '50K+', label: 'Active Users', icon: Users },
    { value: '99.9%', label: 'Uptime SLA', icon: Shield },
    { value: '500+', label: 'API Integrations', icon: Zap },
    { value: '24/7', label: 'Expert Support', icon: Sparkles },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Advanced Analytics Dashboard',
      description:
        'Real-time insights and performance metrics to optimize your SaaS operations with AI-powered recommendations.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOC 2 compliant infrastructure with end-to-end encryption, SSO integration, and advanced threat protection.',
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description:
        'Sub-second response times with global CDN, auto-scaling architecture, and 99.99% uptime guarantee.',
    },
    {
      icon: Globe,
      title: 'Multi-Tenant Architecture',
      description:
        'Scalable white-label solution supporting unlimited tenants with custom branding and isolated data.',
    },
    {
      icon: Clock,
      title: 'Automated Workflows',
      description:
        'Streamline operations with intelligent automation, custom triggers, and seamless third-party integrations.',
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description:
        'Built-in GDPR, HIPAA, and SOX compliance features with automated audit trails and data governance.',
    },
  ];

  return (
    <>
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-0 left-1/4 size-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 size-96 bg-accent/20 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Main CTA */}
          <Card className="border-primary/20 bg-background/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            <CardContent className="relative p-12 lg:p-16">
              <div className="text-center max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
                  <Sparkles className="size-4 mr-2" />
                  Enterprise SaaS Platform
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Scale Your Business with
                  <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Acme SaaS Platform
                  </span>
                </h2>

                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                  Empower your SMB with enterprise-grade SaaS infrastructure. Deploy faster, scale
                  smarter, and deliver exceptional customer experiences with our comprehensive
                  platform.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <Button
                    size="lg"
                    className="group text-base px-8 py-4"
                    onClick={handlePrimaryAction}
                  >
                    Start Free 14-Day Trial
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-8 py-4"
                    onClick={handleSecondaryAction}
                  >
                    Book Demo Call
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="text-center mb-12">
                  <p className="text-sm text-muted-foreground mb-6">
                    Trusted by 50,000+ growing businesses worldwide
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                    {/* Company logos placeholders */}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-24 bg-gradient-to-r from-muted to-muted/50 rounded opacity-50"
                      />
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="size-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="size-6 text-primary" />
                        </div>
                        <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Section */}
          <div className="text-center mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <CheckCircle className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold">No Credit Card Required</h3>
                <p className="text-sm text-muted-foreground">
                  Full access to all features during your 14-day trial
                </p>
              </div>

              <div className="space-y-2">
                <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Shield className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">
                  SOC 2 compliant with 256-bit encryption and 99.9% uptime SLA
                </p>
              </div>

              <div className="space-y-2">
                <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Zap className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold">Rapid Deployment</h3>
                <p className="text-sm text-muted-foreground">
                  Go live in under 30 minutes with our guided onboarding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
              <Zap className="size-4 mr-2" />
              Platform Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need to
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Build & Scale Your SaaS
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive suite of tools and services designed specifically for small and
              medium-sized businesses looking to compete at enterprise level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                >
                  <CardContent className="p-8">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of successful businesses already using Acme SaaS to streamline
                  operations and accelerate growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handlePrimaryAction} className="group">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" onClick={handleSecondaryAction}>
                    View Pricing Plans
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
