"use client";
import React, { useState } from "react";
import {
  TableProps,
  Table,
  Pagination,
  Space,
  Button,
  Popconfirm,
  message,
} from "antd";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { DataUser } from "@/app/data/type";
import { DeleteOutlined } from "@ant-design/icons";
import InsertUser from "./InsertUser";
import { handleDelete } from "@/app/action";
import UpdateUser from "./UpdateUser";

type Props = {
  data: DataUser[] | [];
  // meta: {
  //   current: number;
  //   pageSize: number;
  //   total: number;
  // };
};
const UserTable = ({ data }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [openModelCreate, setOpenModelCreate] = useState(false);
  const [openModelUpdate, setOpenModelUpdate] = useState(false);
  const [selectedKey, setSlectedKey] = useState<any>(null);
  const onChangePage = (
    pagination: any
    // filters: any,
    // sorter: any,
    // extra: any
  ) => {
    if (pagination && pagination.current) {
      const params = new URLSearchParams(searchParams);
      params.set("page", pagination.current);
      replace(`${pathname}?${params.toString()}`);
    }
  };
  const columns: TableProps<DataUser>["columns"] = [
    {
      title: "Stt",
      key: "stt",
      render: (_, __, index) => index + 1,
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "Action",
      render: (_, recod) => (
        <Space>
          <Button
            type="dashed"
            onClick={() => {
              setOpenModelUpdate(true);
              setSlectedKey(recod);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => {
              console.log("DELETE", recod);
              handleDelete(recod.id);
              message.success("xóa thành công");
            }}
            onCancel={() => {}}
            okText="Đồng ý"
            okType="danger"
            cancelText="Đóng"
          >
            <Button type="dashed">
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const renderHeader = () => {
    return (
      <>
        <div className="flex justify-between items-center">
          <div>Table User</div>
          <Button
            type="primary"
            onClick={() => {
              setOpenModelCreate(true);
            }}
          >
            +Thêm mới
          </Button>
        </div>
      </>
    );
  };
  return (
    <>
      <Table
        title={renderHeader}
        rowKey={"id"}
        pagination={false}
        columns={columns}
        dataSource={data}
        onChange={onChangePage}
      />
      <InsertUser
        openModel={openModelCreate}
        setOpenModel={setOpenModelCreate}
      />
      <UpdateUser
        openModel={openModelUpdate}
        setOpenModel={setOpenModelUpdate}
        selectedKey={selectedKey}
      />
    </>
  );
};

export default UserTable;
