import { Icon } from "../Icon";
import "./styles.scss";
import { IBreadcrumbsProps } from "./types";
import { separateCrumbs } from "./utils/separateCrumbs";

function Breadcrumbs({ crumbs, customClass, style }: IBreadcrumbsProps) {
  const { selfCrumb, otherCrumbs } = separateCrumbs(crumbs);

  return (
    <div
      className={`breadcrumbs-container ${customClass ? customClass : ""}`}
      style={style}
    >
      {selfCrumb && (
        <a
          className={`crumb self`}
          key={`${selfCrumb.name}-${selfCrumb.link}`}
          href={undefined}
        >
          {selfCrumb.name}
        </a>
      )}

      <div
        className={`breadcrumbs-content ${customClass ? customClass : ""}`}
        style={style}
      >
        {otherCrumbs.map((crumb, index) => (
          <a
            className={`crumb`}
            key={`${crumb.name}-${crumb.link}`}
            href={
              crumb.link !== "self" && crumb.link !== "last"
                ? crumb.link
                : undefined
            }
          >
            {crumb.name}
            {index !== otherCrumbs.length - 1 ? (
              <Icon name="KeyboardArrowRightOutlined" />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
}

export { Breadcrumbs };
