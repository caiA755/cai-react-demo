import React from 'react';
import { Button as AntButton } from 'antd'; // 引入 Ant Design 的 Button 组件

// Button 组件支持自定义样式和功能
interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text'; // 支持的按钮类型
  size?: 'small' | 'middle' | 'large'; // 按钮大小
  onClick?: () => void; // 点击事件处理
  children?: React.ReactNode; // 按钮内容
  loading?: boolean; // 加载状态
}

const Button: React.FC<ButtonProps> = ({ type = 'default', size = 'middle', onClick, children, loading }) => {
  return (
    <AntButton type={type} size={size} onClick={onClick} loading={loading}>
      {children}
    </AntButton>
  );
};

export default Button;
