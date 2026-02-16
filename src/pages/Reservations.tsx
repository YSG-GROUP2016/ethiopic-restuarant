import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

type ReservationForm = {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  party: number;
  notes?: string;
};

const Reservations: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<ReservationForm>();

  const onSubmit = (data: ReservationForm) => {
    // Open WhatsApp with a pre-filled reservation message (simple backend-free flow)
    const msg = encodeURIComponent(
      `Reservation request:\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || '-'}\nDate: ${data.date} ${data.time}\nParty size: ${data.party}\nNotes: ${data.notes || '-'} `
    );
    window.open(`https://wa.me/2348170339432?text=${msg}`, '_blank');
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEO title="Reservations - H&T Ethiopian Restaurant | Book Your Table" description="Reserve a table at H&T Ethiopian Restaurant in Lagos. Easy online booking with WhatsApp confirmation." />

      <main className="py-20">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center animate-fade-in-up">
          <p className="text-accent font-semibold text-lg mb-3">Make a Reservation</p>
          <h1 className="text-5xl font-bold text-foreground mb-4">Reserve Your Table</h1>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your table at H&T Ethiopian Restaurant and experience authentic Ethiopian hospitality. We'll confirm your reservation via WhatsApp.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card border border-border/50 p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
              <Input 
                {...register('name', { required: true })} 
                placeholder="Jane Doe"
                className="bg-background border-border/50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
              <Input 
                {...register('phone', { required: true })} 
                placeholder="+234 8XX XXX XXXX"
                className="bg-background border-border/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Date *</label>
              <Input 
                type="date" 
                {...register('date', { required: true })} 
                className="bg-background border-border/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Time *</label>
              <Input 
                type="time" 
                {...register('time', { required: true })} 
                className="bg-background border-border/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Party Size *</label>
              <Input 
                type="number" 
                {...register('party', { valueAsNumber: true, required: true })} 
                min={1} 
                defaultValue={2}
                className="bg-background border-border/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Email (Optional)</label>
            <Input 
              {...register('email')} 
              placeholder="you@example.com"
              className="bg-background border-border/50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Special Requests (Optional)</label>
            <textarea 
              {...register('notes')} 
              placeholder="Any dietary requirements, special occasions, or preferences..."
              className="w-full rounded-md border border-border/50 p-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
              rows={4}
            />
          </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-border/30">
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
              >
                Complete Reservation
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reservations;
