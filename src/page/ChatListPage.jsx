import ChatListNav from "../components/ChatListNav";
import data from "../data";
import ChatLayout from "../components/ChatLayout";
import { setChatList, setActiveChat, selectChatList, selectActiveChatRoom } from "../feature/chatSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../hook/Hook.ts';
import ChatListNav2 from "../components/ChatListNav2.jsx";
import ChatListBottomNav from "../components/ChatListBottomNav.jsx";

function ChatList({ activeChat, columnHandle }) {
    const dispatch = useAppDispatch();
    const chatList = useAppSelector(selectChatList);

    useEffect(() => {
        dispatch(setChatList(data));
    }, [dispatch]);

    // Correct function invocation for click event
    const activeChatRoomHandle = (id) => {
        dispatch(setActiveChat(id));
        console.log(id)
    };

    return (
        <section className="relative">
            <div className="relative">
                <ChatListNav />
                <ChatListNav2 activeChat={activeChat} />
                <ChatListBottomNav/>
                <div className="h-[945px] overflow-y-auto scrollable pt-[110px] chat-list-responsive">
                    <div onClick={columnHandle}>
                        {chatList.map((chat) => (                            
                                <ChatLayout
                                key={chat.id}
                                chat={chat}
                                activeChat={activeChat}
                                activeChatRoomHandle={activeChatRoomHandle}
                            />
                        ))}
                    </div>
                    <ChatListBottomNav activeChat={activeChat}/>
                </div>
                
                
            </div>
        </section>
    );
}

export default ChatList;
