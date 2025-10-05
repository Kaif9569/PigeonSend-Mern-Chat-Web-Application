import MessageHead from '@/components/contentPart/messageBox/MessageHead'
import MessageInput from '@/components/contentPart/messageBox/MessageInput';
import MessagesItem from '@/components/contentPart/messageBox/MessagesItem'

const MessageBox = () => {
  return (
    <div className='flex flex-1  flex-col h-screen w-[100%]  xl:overflow-y-auto bg-[#1d1f1f] scrollbar-green overflow-y-auto'>
      <div className=' z-10 w-full xl:sticky xl:top-0'>
        <MessageHead/>
      </div>
      <div className='flex flex-col flex-1 h-full items-start gap-3 ml-4 mt-8'>
        <MessagesItem/>
        <MessagesItem/>
        <MessagesItem/>
        <MessagesItem/>
      </div>
      <div className='flex w-full sticky bottom-0 z-10'>
        <MessageInput/>
        </div>
    </div>
  )
}

export default MessageBox
