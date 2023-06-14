
import { Metadata } from "next";
import Posts from "@/components/Posts";
import Search from "@/components/Search";
import { useState, useEffect } from "react";
import { getAllPosts } from "@/services/getPosts";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function Blog() {


  return (
    <>
      <h1>Blog page</h1>
      <Search />
      <Posts />
    </>
  );
}
