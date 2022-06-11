import Link from "next/link";

const CustomLink = ({ href, className, children }) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};
export default CustomLink;
