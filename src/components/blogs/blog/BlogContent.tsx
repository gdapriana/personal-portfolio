export default function BlogContent({ data }: { data: any }) {
  return <div className="w-full">{data.content}</div>;
}
