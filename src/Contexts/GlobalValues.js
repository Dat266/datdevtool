import React from "react";
import ValuesContext from "./ContextInstace";
import { message } from "antd";

const GlobalValues = ({ children }) => {
	const [messageApi, contextHolder] = message.useMessage();

	const values = { messageApi, contextHolder };
	return (
		<ValuesContext.Provider value={values}>{children}</ValuesContext.Provider>
	);
};

export default GlobalValues;
