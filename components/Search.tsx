"use client";
import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";
import useSWR from "swr";

const Search = () => {
  const { mutate } = useSWR("posts");
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;
