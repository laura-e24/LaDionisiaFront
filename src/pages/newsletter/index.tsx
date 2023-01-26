import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import style from "../../assets/style/newsletter.module.css";
import React, { useEffect, useState } from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelector } from "react-redux";
import { getAllUsersDb, selectAllUsers } from "../../features/comments/commentsSlice";
import { useAppDispatch } from "../../app/store";
import axios from "axios";
import { useRouter } from "next/router";

const Newsletter = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { user } = useUser();
  const users = useSelector(selectAllUsers)
  const userExistente = users.find(u => u.email === user?.email)
  const [email, setEmail] = useState("")
  useEffect(() => {
    const emailfield = document.getElementById('emailfield')
    emailfield.focus()
    const fetchData = async () => {
      await dispatch(getAllUsersDb());
    }
    fetchData()
  }, [])
  const send = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${process.env.RESTURL_PRODUCTS}/sendEmail`,
      //aca debe ir el email de usuario loggeado
      {
        userEmail: email || userExistente?.email,
        newsletter: true
      })
      if(response.status === 200) {
        router.push("/newsletter-received")
      }
  }
  return (
    <>
      <div className="
  main-about
  main-body  
  pt-12 
  m-auto
  min-h-screen
  max-w-screen-xl
  bg-bg-body 
  ">
        <NavBar></NavBar>
        <img className="object-cover h-96 w-full" src="assets/newsletter.jpg" />
        <h2 className="font-playfair text-gray-600 text-4xl mt-16" >JOIN OUR NEWSLETTER</h2>
        <p className="font-bodony text-gray-600 text-xl text-justify mt-6 mb-20">
          Every day we publish articles to pique your interest and awaken your thirst for wine knowledge. Too busy to visit? No problem – just sign up for our newsletter for weekly highlights from our articles, with links to the stories you may have missed.
        </p>
        <div id={style.newsletter}>
          <form id="newsletterform" onSubmit={send}>
            <img className="mt-4" src="assets/stamp.png" />
            <div className="title font-poppins text-gray-600 text-xl pl-10 mt-4">
              Newsletter
            </div>
            <label htmlFor="email" className=" pl-10 font-poppins text-gray-600 text-xl">
              Send us your email, we'll make sure you never miss a thing!
            </label>
            <input name="email" id="emailfield" className="font-poppins text-xl" type="email" required placeholder="enter your email" value={email || userExistente?.email} onChange={(e) => setEmail(e.target.value)} />
            <input type="submit" value="subscribe now" />
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Newsletter;

