interface ICrumb {
  name: string;
  link: string | "self";
  isTitle?: boolean;
}

interface IBreadcrumbsProps {
  crumbs: ICrumb[];
  customClass?: string;
  style?: React.CSSProperties;
}

export type { ICrumb, IBreadcrumbsProps };
