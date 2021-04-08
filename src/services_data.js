import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { MdBrandingWatermark } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineMessage } from 'react-icons/ai'
import { MdPayment } from 'react-icons/md'

export const services = [
  {
    icon: <BsHeart />,
    style: 'heart',
    title: 'Quality and Saving',
    msg: 'Comprehensive quality control and affordable prices',
  },
  {
    icon: <MdBrandingWatermark />,
    style: 'brand',
    title: 'Global Brands',
    msg: 'Buy you favorite items from your favorite global brands',
  },
  {
    icon: <FaTelegramPlane />,
    style: 'telegram',
    title: 'Fast Delivery',
    msg: 'Fast and convenient door to door delivery',
  },
  {
    icon: <MdPayment />,
    style: 'payment',
    title: 'Secure Payment',
    msg: 'Different secure payment methods',
  },
  {
    icon: <AiOutlineMessage />,
    style: 'message',
    title: 'Professional Service',
    msg: 'Efficient customer support from passionate team',
  },
]
