import React, { useContext, useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import TextArea from "antd/es/input/TextArea";
import { Button, Space } from "antd";
import ValuesContext from "../../Contexts/ContextInstace";

const cx = classNames.bind(styles);

const Header = () => {
	const [values, setValues] = useState("");
	const { messageApi } = useContext(ValuesContext);
	const refInput = useRef();

	const onCoppy = () => {
		navigator.clipboard.writeText(values);
		messageApi.success("Coppied");
	};

	const onFirstLetter = () => {
		var convertToArray = values.toLowerCase().split(" ");
		var result = convertToArray
			.map(function (val) {
				return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
			})
			.join(" ");

		setValues(result);
		messageApi.success("Thành Công Rồi Nhé Babe!");
	};

	const onCapitalization = () => {
		const newValue = values.toUpperCase();
		setValues(newValue);
		messageApi.success("Thành Công Rồi Nhé Babe!");
	};

	const onReset = () => {
		setValues("");
		refInput.current.focus();
	};

	return (
		<div>
			<h1 className={cx("title")}>Chào Mừng Bạn Đến Với ĐạtDEVTOOL ^_^!</h1>
			<marquee direction="right" scrolldelay="2" className={cx("maqq")}>
				Mọi thắc mắc liên hệ 0389.326.697 nhé !!!
			</marquee>
			<div className={cx("form")}>
				<TextArea
					ref={refInput}
					onChange={(e) => setValues(e.target.value)}
					value={values}
					rows={6}
					className={cx("ip")}
					placeholder="Vui lòng nhập văn bản cần chuyển đổi ..."
				/>
				<div className={cx("btn")}>
					<Space>
						<Button onClick={onCoppy} size="large" type="primary">
							Coppy
						</Button>
						<Button onClick={onFirstLetter} size="large" type="primary">
							Viết Hoa Chữ Cái Đầu
						</Button>
						<Button onClick={onCapitalization} size="large" type="primary">
							Viết Hoa{" "}
						</Button>
						<Button onClick={onReset} size="large" type="primary" danger>
							Reset
						</Button>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default Header;
