import ChatList from "@/components/list/chat-list/chat-list";
import ChatListQuery from "@/components/list/chat-list/chat-list-query/chat-list-query";
import ChatListResponse from "@/components/list/chat-list/chat-list-response/chat-list-response";
import Container from "@mui/material/Container";

export default function Page() {
	return (
		<Container maxWidth="sm">
			<ChatList>
				<ChatListQuery id="12345-67890" primary="Bob" />
				<ChatListResponse
					id="12345-67891"
					primary="Hey Jason — could you clarify what you'd like help with regarding “bob”? Are you referring to a variable, a person, or something else entirely?"
				/>
				<ChatListQuery id="67890-12345" primary="Tom" />
				<ChatListResponse
					id="67890-12346"
					primary="We've got Bob and Tom — sounds like the start of a coding example, a joke, or a comic strip. Want to build something with them? For example:"
				/>
			</ChatList>
		</Container>
	);
}
