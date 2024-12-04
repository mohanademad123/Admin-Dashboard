export interface IMessage {
  user: MessageUserData
  time: string,
  msg: string,
}
export interface MessageUserData {
  name: string,
  isOwnMessage: boolean
  imgUrl: string,
}