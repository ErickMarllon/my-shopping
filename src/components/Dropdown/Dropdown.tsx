import { useMemo, useState } from "react";
import {
  Dropdown as DropdownBootstrap,
  DropdownProps as DropdownBootstrapProps,
} from "react-bootstrap";
import "./styles.scss";
import { DropdownProps, OrderDirectionIconProps } from "./types";
import { Icon } from "../Icon";

const orderIconsName: OrderDirectionIconProps = {
  asc: "KeyboardArrowDownRounded",
  desc: "KeyboardArrowUpRounded",
  default: "UnfoldMoreRounded",
};

const Dropdown = ({
  title,
  orderOptions,
  sort,
  orderDirection,
  onSort,
  onOrderDirection,
  hasDoubleCheckIcon = false,
  hasOnClear,
  isRevertTitle,
  drop = "down-centered",
  ...otherProps
}: DropdownProps & Partial<DropdownBootstrapProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOrderChange = (value: string) => {
    if (!orderOptions?.order?.options) {
      onOrderDirection(null);
      return;
    }
    onOrderDirection(
      orderDirection === value
        ? null
        : (orderOptions.order.options.find((el) => el.value === value)?.value ??
            null)
    );
  };

  const handleSortChange = (value: string) => {
    if (!orderOptions?.sort?.options) {
      onOrderDirection(null);
      return;
    }
    onSort(
      sort === value
        ? null
        : (orderOptions.sort.options.find((el) => el.value === value)?.value ??
            null)
    );
  };

  const handleCleanOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOrderDirection(null);
    onSort(null);
  };

  const isDoubleCheck = useMemo(
    () => sort && orderDirection,
    [sort, orderDirection]
  );

  return (
    <DropdownBootstrap
      className={`sortable_drop_down ${sort ? "selected" : ""}`}
      onClick={() => setIsOpen(true)}
      drop={drop}
      {...otherProps}
    >
      <DropdownBootstrap.Toggle className="sortable_drop_down-toggle">
        <span
          className={`icon-text-container ${isRevertTitle ? "revert" : ""}`}
        >
          {hasDoubleCheckIcon && (
            <Icon
              name={
                orderIconsName[
                  isDoubleCheck && orderDirection ? orderDirection : "default"
                ]
              }
            />
          )}
          {sort ? sort : title}
        </span>

        {isDoubleCheck && hasOnClear && (
          <span
            className="sortable_drop_down-toggle-close"
            onClick={handleCleanOrder}
          >
            <Icon name="CloseRounded" />
          </span>
        )}

        {!hasDoubleCheckIcon && (
          <Icon name={orderIconsName[orderDirection || "asc"]} />
        )}
      </DropdownBootstrap.Toggle>
      {isOpen && (
        <DropdownBootstrap.Menu>
          {orderOptions?.sort && (
            <>
              <DropdownBootstrap.Header>
                {orderOptions?.sort.title}
              </DropdownBootstrap.Header>
              {orderOptions?.sort.options.map((option) => (
                <DropdownBootstrap.Item
                  className={`sortable_drop_down-item ${
                    sort === option.value ? "selected" : ""
                  }`}
                  key={option.value}
                  onClick={() => {
                    handleSortChange(option.value);
                  }}
                >
                  <p>{option.label}</p>
                  {sort === option.value && <Icon name="CheckRounded" />}
                </DropdownBootstrap.Item>
              ))}
            </>
          )}

          {orderOptions?.order && orderOptions?.sort && (
            <DropdownBootstrap.Divider />
          )}

          {orderOptions && (
            <>
              <DropdownBootstrap.Header>
                {orderOptions?.order.title}
              </DropdownBootstrap.Header>
              {orderOptions?.order.options.map((order) => (
                <DropdownBootstrap.Item
                  className={`sortable_drop_down-item ${
                    orderDirection === order.value ? "selected" : ""
                  }`}
                  key={order.value}
                  onClick={() => {
                    handleOrderChange(order.value);
                  }}
                >
                  <p>{order.label}</p>
                  {orderDirection === order.value && (
                    <Icon name="CheckRounded" />
                  )}
                </DropdownBootstrap.Item>
              ))}
            </>
          )}
        </DropdownBootstrap.Menu>
      )}
    </DropdownBootstrap>
  );
};

export { Dropdown };
