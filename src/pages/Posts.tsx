import useSWR from "swr"

const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = (await res.json()) as { id: number; title: string; body: string }[]
    return data
  })

  return (
    <div className="wrapper">
      <h1>Example for data fetching (loading):</h1>
      <div className="w-full flex flex-wrap gap-4 mt-6">
        {isLoading
          ? Array.from(Array(10)).map(() => (
              <div className="skeleton bg-slate-900 w-[calc(50%-0.5rem)] h-32 rounded-xl" />
            ))
          : posts?.map((post) => (
              <div className="bg-slate-900 w-[calc(50%-0.5rem)] p-3 rounded-xl" key={post.id}>
                <a
                  className="text-sky-100 hover:text-sky-300 hover:underline"
                  href={`https://jsonplaceholder.typicode.com/posts/${post.id}`}
                  target="_blank"
                >
                  {post.id}. {post.title}
                </a>
                <p className="w-full mt-3 opacity-75">{post.body}</p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Posts
