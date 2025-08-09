import BlogPage from "@/app/components/BlogFullView";
import { blogs } from "@/data/blogData";

interface MyPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetails({ params }: MyPageProps) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return <div className="p-6 text-center text-red-500">Blog not found</div>;
  }

  return (
    <BlogPage
      mainImage={blog.blogFullImage}
      title={blog.blogFullHead}
      authorImage={blog.userImage}
      authorName={blog.userName}
      date="08 August 2025"
      introduction={blog.introText}
      benefits={blog.benefits}
      realExample={blog.realExampleText}
    />
  );
}
