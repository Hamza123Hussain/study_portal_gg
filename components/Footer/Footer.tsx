// components/Footer.tsx
import React from 'react'
import Image from 'next/image'
import SocialMediaButton from './SocialMediaButtons'
import { socialMediaData } from '@/utils/SocialMediaArray'
import CopyrightSection from './CopyrightSection'
const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 border-t-2 border-slate-700 text-white">
      {/* Logo and Social Media Icons Section */}
      <div className="container p-6">
        <section className="flex flex-col sm:flex-row justify-between gap-5 items-center mb-6">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Image
              className="rounded-full"
              src="/G_b-200x200.png"
              width={50}
              height={50}
              alt="Global Grads"
            />
            <h6 className="text-xl font-extrabold text-white">
              Global Grads Study Portal
            </h6>
          </div>
          {/* Social Media Buttons */}
          <div className="flex gap-4">
            {socialMediaData.map((social, index) => (
              <SocialMediaButton
                key={index}
                icon={social.icon}
                backgroundColor={social.backgroundColor}
                url={social.url}
              />
            ))}
          </div>
        </section>
        {/* Copyright and Powered By Section */}
        <CopyrightSection />
      </div>
    </footer>
  )
}
export default Footer
