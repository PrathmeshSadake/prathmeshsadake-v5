import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className='flex space-x-6 mx-auto max-w-fit py-12'>
      <Linkedin className='w-6 h-6 text-neutral-500 hover:text-neutral-200 cursor-pointer' />
      <IconBrandGithub className='w-6 h-6 text-neutral-500 hover:text-neutral-200 cursor-pointer' />
      <IconBrandInstagram className='w-6 h-6 text-neutral-500 hover:text-neutral-200 cursor-pointer' />
      <Mail className='w-6 h-6 text-neutral-500 hover:text-neutral-200 cursor-pointer' />
      <IconBrandTwitter className='w-6 h-6 text-neutral-500 hover:text-neutral-200 cursor-pointer' />
    </div>
  );
};

export default Footer;
