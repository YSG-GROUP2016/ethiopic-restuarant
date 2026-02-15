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
      <SEO title="Reservations" description="Make a reservation at H&T Ethiopian Restaurant" />

      <main className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">Reserve a Table</h1>
        <p className="text-muted-foreground mb-8">Fill out the form below and we'll confirm your booking via WhatsApp.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card/50 border border-border p-8 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Full name</label>
              <Input {...register('name', { required: true })} placeholder="Jane Doe" />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground">Phone</label>
              <Input {...register('phone', { required: true })} placeholder="+234 8XX XXX XXXX" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Date</label>
              <Input type="date" {...register('date', { required: true })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Time</label>
              <Input type="time" {...register('time', { required: true })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Party size</label>
              <Input type="number" {...register('party', { valueAsNumber: true, required: true })} min={1} defaultValue={2} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground">Email (optional)</label>
            <Input {...register('email')} placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground">Notes (optional)</label>
            <textarea {...register('notes')} className="w-full rounded-md border border-border p-2 bg-transparent text-foreground" rows={4} />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-primary">Request Reservation</Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Reservations;
