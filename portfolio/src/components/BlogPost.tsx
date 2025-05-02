import Link from "next/link";

interface BlogPostProps {
    content: string,
    date: Date,
    title: string;
}

export default function BlogPost({content, date, title }: BlogPostProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <b className="text-md">{date.toDateString()}</b>
        <p className="text-lg mb-8">
          {content}
        </p>
        <Link
            href="/"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            {"Return Home"}
        </Link>
        </div>
    );
}