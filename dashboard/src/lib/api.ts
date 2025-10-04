import { companies, countries, posts } from "./sample";
import { Post } from "@/types";

let _countries = [...countries]
let _companies = [...companies]
let _posts = [...posts]

const delay = (ms : number) => new Promise(res => setTimeout(res, ms))
const jitter = () => 200 + Math.random() * 600 // 200-800ms 랜덤 지연 발생 
const maybeFail = () => Math.random() < 0.15 // 15% 확률 실패 

export async function fetchCountries() {
  await delay(jitter())    
  return _countries
}

export async function fetchCompanies() {
  await delay(jitter())
  return _companies
}

export async function fetchPosts() {
  await delay(jitter())
  return _posts
}

export async function createOrUpdatePost(p: Omit<Post, "id"> & { id?: string }) {
  await delay(jitter())
  if (maybeFail()) throw new Error("Save Failed")
  // update 시 
  if (p.id) {
    _posts = _posts.map(x => x.id === p.id ? (p as Post) : x)
    return p as Post
  }
  // create 시 
  const created = { ...p, id : crypto.randomUUID()}
  _posts = [..._posts, created]
  return created
}