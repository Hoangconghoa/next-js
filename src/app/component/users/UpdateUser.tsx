import { handleUpdate } from "@/app/action";
import { DataUser } from "@/app/data/type";
import { Form, Input, message, Modal } from "antd";
import React, { useState } from "react";
type Props = {
  openModel: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
  selectedKey: any;
};
const UpdateUser = ({ openModel, setOpenModel, selectedKey }: Props) => {
  //   const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [UpdateForm] = Form.useForm();
  UpdateForm.setFieldsValue(selectedKey);
  const [loading, setLoading] = useState(false);
  const toggleModal = () => {
    setOpenModel(!openModel);
  };
  console.log("select", selectedKey);
  const onFinish = async (values: any) => {
    console.log("values", values);
    const res = await handleUpdate(selectedKey.id, values);
    message.success("update thành công");
    UpdateForm.resetFields();
    toggleModal();
  };
  return (
    <div>
      <Modal
        open={openModel}
        title="Email"
        onOk={() => UpdateForm.submit()}
        onCancel={() => toggleModal()}
        confirmLoading={loading}
        okText="Submit"
        width={600}
      >
        <Form
          form={UpdateForm}
          name="update-form"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<DataUser>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input Name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<DataUser>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input email" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateUser;
