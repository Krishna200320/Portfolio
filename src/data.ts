export interface Certificate {
  name: string
  issuer: string
  year: string
  description: string
}

export interface ProjectLogo {
  label: string
  background: string
  color: string
}

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  logo: ProjectLogo
  liveUrl?: string
  githubUrl?: string
}

export interface Achievement {
  type: 'certificate' | 'education' | 'experience'
  title: string
  organization: string
  period: string
  description: string
}

export interface TechItem {
  name: string
  icon: string
}

export interface TechCategory {
  title: string
  items: TechItem[]
}

export interface Drive {
  icon: string
  title: string
  description: string
}

export const heroData = {
  name: 'Krishna Patel',
  title: 'Cloud & DevOps Engineer',
  subtitle: 'Building scalable, secure, and cost-efficient solutions on AWS',
  location: 'Toronto, Canada',
}

export const aboutData = {
  intro: `I'm a Toronto-based Cloud and DevOps Engineer with a passion for transforming complex cloud architectures into efficient, reliable systems. My journey in cloud computing began with a curiosity about how AWS services can revolutionize traditional IT infrastructure.`,
  
  story: `With an AWS Certified Cloud Practitioner credential and a Diploma in Computer Programming from Seneca Polytechnic, I've built a strong foundation in software development, automation, and infrastructure design. My focus centers on cloud infrastructure, automation pipelines, and security best practices to help teams innovate faster and operate more efficiently.`,
  
  current: `Currently, I'm preparing for the AWS Solutions Architect – Associate certification, expanding my expertise in cloud architecture, VPC networking, and cost optimization. My diverse background in IT support, QA automation, and compliance has equipped me with leadership and analytical problem-solving skills that help bridge the gap between technical implementation and business goals.`,
  
  profileImage: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=640&h=640&fit=crop&crop=faces',
}

export const achievements: Achievement[] = [
  {
    type: 'certificate',
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    period: '2024',
    description: 'Validated foundational knowledge of AWS cloud services, security, and compliance',
  },
  {
    type: 'education',
    title: 'Diploma in Computer Programming',
    organization: 'Seneca Polytechnic',
    period: '2022-2024',
    description: 'Comprehensive program covering software development, automation, and infrastructure design',
  },
  {
    type: 'experience',
    title: 'Cloud Infrastructure Engineer',
    organization: 'Freelance Projects',
    period: '2023-Present',
    description: 'Deploying and managing cloud solutions on AWS with focus on scalability and cost optimization',
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website on AWS',
    description: 'A fully automated, serverless portfolio website hosted on AWS using S3 for static hosting, CloudFront for global content delivery, Route 53 for DNS management, and ACM for SSL certificates. Implemented CI/CD pipeline with GitHub Actions for seamless deployments.',
    technologies: ['AWS S3', 'CloudFront', 'Route 53', 'ACM', 'GitHub Actions'],
    logo: {
      label: 'AWS',
      background: '#ff9900',
      color: '#111827',
    },
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'CI/CD Automation Pipeline',
    description: 'Developed a comprehensive CI/CD pipeline using AWS CLI and GitHub Actions to automate deployments, reduce manual intervention, and improve development workflow efficiency. Integrated automated testing and deployment notifications.',
    technologies: ['GitHub Actions', 'AWS CLI', 'Lambda', 'SNS', 'CloudWatch'],
    logo: {
      label: 'CI/CD',
      background: '#111827',
      color: '#ffffff',
    },
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Monitoring & Alerting System',
    description: 'Built a robust monitoring and alerting system using CloudWatch, SNS, and Lambda functions. Enables proactive issue detection, automated notifications, and comprehensive system health monitoring across multiple AWS services.',
    technologies: ['CloudWatch', 'SNS', 'Lambda', 'Python', 'EventBridge'],
    logo: {
      label: 'Ops',
      background: '#065f46',
      color: '#e0f2f1',
    },
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Data Security Enhancement Platform',
    description: 'Implemented a comprehensive data security solution using AWS Macie for data discovery, Inspector for security assessments, and IAM policies for access control. Ensures compliance with security standards and protects sensitive information.',
    technologies: ['AWS Macie', 'Inspector', 'IAM', 'CloudTrail', 'GuardDuty'],
    logo: {
      label: 'SecOps',
      background: '#0f172a',
      color: '#e2e8f0',
    },
    liveUrl: '#',
    githubUrl: '#',
  },
]

export const techStack: TechCategory[] = [
  {
    title: 'AWS Services',
    items: [
      { name: 'S3', icon: '☁️' },
      { name: 'EC2', icon: '🖥️' },
      { name: 'CloudFront', icon: '🌐' },
      { name: 'Route 53', icon: '📍' },
      { name: 'ACM', icon: '🔒' },
      { name: 'Lambda', icon: '⚡' },
      { name: 'VPC', icon: '🌍' },
      { name: 'Macie', icon: '🔍' },
      { name: 'Inspector', icon: '🛡️' },
      { name: 'Trusted Advisor', icon: '💡' },
      { name: 'CloudWatch', icon: '📊' },
      { name: 'SNS', icon: '📢' },
    ],
  },
  {
    title: 'DevOps Tools',
    items: [
      { name: 'GitHub Actions', icon: '🔄' },
      { name: 'AWS CLI', icon: '⚙️' },
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Jenkins', icon: '🤖' },
      { name: 'Git', icon: '📦' },
    ],
  },
  {
    title: 'Programming & Databases',
    items: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'SQL', icon: '🗄️' },
      { name: 'MySQL', icon: '💾' },
    ],
  },
  {
    title: 'Testing & APIs',
    items: [
      { name: 'Postman', icon: '📮' },
      { name: 'REST API Testing', icon: '🔌' },
      { name: 'CloudWatch Testing', icon: '🧪' },
    ],
  },
]

export const drives: Drive[] = [
  {
    icon: '⚡',
    title: 'Simplifying Complexity',
    description: 'Transforming complex cloud architectures into efficient, reliable systems that teams can easily manage and scale',
  },
  {
    icon: '🔄',
    title: 'Automation Excellence',
    description: 'Automating manual workflows to improve performance, reduce costs, and eliminate human error',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    description: 'Staying current with AWS best practices, emerging DevOps tools, and cloud architecture patterns',
  },
  {
    icon: '🚀',
    title: 'Innovation & Scalability',
    description: 'Contributing to a future where innovation and scalability go hand-in-hand, enabling businesses to grow without limits',
  },
]

