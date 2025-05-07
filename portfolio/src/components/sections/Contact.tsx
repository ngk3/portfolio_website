import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
<section id="contact" className="py-16 md:py-24 bg-muted/50">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <div className="flex flex-col items-center text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Get In Touch</h2>
      <div className="w-20 h-1 bg-primary rounded"></div>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
        Have a project in mind or want to discuss opportunities? Feel free to reach out!
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
          <form className="space-y-4">
            <div>
              <Input placeholder="Your Name" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <Input placeholder="Subject" />
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={5} />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Availability</h3>
            <p className="text-muted-foreground">
              I'm currently available for freelance work and full-time opportunities. My typical response time is within
              24 hours.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>
    )
}