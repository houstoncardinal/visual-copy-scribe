import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    licenseNumber: "",
    licenseType: "",
    companyName: "",
    additionalInfo: ""
  });
  const { toast } = useToast();

  const services = [
    "Staffing & Consulting",
    "Celebrity/VIP Protection", 
    "Domestic Protection/Security",
    "Events/Tours",
    "Executive Protection",
    "International Operations",
    "Residential & Commercial"
  ];

  const licenseTypes = [
    "Armed"
  ];

  const progress = (step / 3) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      service: "",
      licenseNumber: "",
      licenseType: "",
      companyName: "",
      additionalInfo: ""
    });
    setStep(1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">Get Started</h3>
        <p className="text-muted-foreground">Step {step} of 3</p>
        <Progress value={progress} className="mt-3" />
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="service">What service are you interested in? *</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="button" 
            onClick={handleNext} 
            className="w-full"
            variant="security"
            disabled={!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.service}
          >
            Next
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="licenseNumber">License Number (State of Texas) *</Label>
            <Input
              id="licenseNumber"
              value={formData.licenseNumber}
              onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="licenseType">License Type *</Label>
            <Select value={formData.licenseType} onValueChange={(value) => handleInputChange("licenseType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select license type" />
              </SelectTrigger>
              <SelectContent>
                {licenseTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="additionalInfo">Tell us about your experience, certifications, or any additional information...</Label>
            <Textarea
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              rows={4}
            />
          </div>

          <div className="flex gap-4">
            <Button type="button" onClick={handlePrevious} variant="outline" className="flex-1">
              Previous
            </Button>
            <Button 
              type="button" 
              onClick={handleNext} 
              className="flex-1"
              variant="security"
              disabled={!formData.licenseNumber || !formData.licenseType}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="finalInfo">Additional Information (Optional)</Label>
            <Textarea
              id="finalInfo"
              placeholder="Tell us about your specific needs, timeline, or any other requirements..."
              rows={4}
            />
          </div>

          <div className="flex gap-4">
            <Button type="button" onClick={handlePrevious} variant="outline" className="flex-1">
              Previous
            </Button>
            <Button type="submit" className="flex-1" variant="security">
              Submit Application
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;