// タスク情報の構造体
export interface Task {
  id: string
  title: string
  description: string
}

// ユーザー情報の構造体
export interface UserInfo {
  email: string
}

// ログイン情報の構造体
export interface User {
  email: string
  password: string
}

// csrf-token有効性の構造体
export interface CsrfToken {
  csrf_token: string
}
