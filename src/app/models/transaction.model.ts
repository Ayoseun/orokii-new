export default class Transaction {
  id?: string;
  email!: string;
  stellar_address!: string;
  amount_net!: number;
  amount_fee!: number;
  token_amount!: number;
  status!: string;
  transition_type!: string;
  phone!: string;
  firstName!: string;
  lastName!: string;
  comments!: string;
  created_at!:any;
  transaction_hash!: string;
  transition_ref!: string;
  memo!: string;
}