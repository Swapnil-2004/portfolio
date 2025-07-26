import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface ExperienceItem {
  date: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}
