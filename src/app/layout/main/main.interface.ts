export interface Cards {
  code: number
  image: string;
  title: string;
  company: string;
  companyLogo: string;
  coins: number;
  description?: string;
  descriptionList: string[];
  descriptionTitle: string;
  date?: string;
  id: number;
  name?: string;
  sub_name?: string;
  expired_date?: string;
  cost?: number;
  photo?: string;
  category?: string;
}

export interface BenefitsTop {
  name: string;
  benefits: Cards[]

}

export interface Order {
  date: string;
  benefits: Cards[]

}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  coins: number;
  role: number;
  orders: Order[]
}
