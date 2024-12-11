// components/SocialMediaButton.tsx
import React from 'react'

interface SocialMediaButtonProps {
  icon: any
  backgroundColor: string
  url: string
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon: Icon,
  backgroundColor,
  url,
}) => {
  return (
    <a
      className="btn btn-primary btn-floating m-1 p-1.5 rounded-md"
      href={url}
      role="button"
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor }}
    >
      <Icon size={24} color="white" />
    </a>
  )
}

export default SocialMediaButton
