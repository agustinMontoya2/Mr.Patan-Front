"use client"
import useRedirect from '@/customHooks/useRedirect'
import React from 'react'
import { ProfileView } from '@/views/profileView/profile-view'

function Profile() {
  useRedirect("user", "/inicio", true);
  return <ProfileView />
}

export default Profile