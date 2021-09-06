import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists'
import Screen from '../components/Screen'

const initialMessages = [
    {
        id: 1,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid quos illum consequuntur ipsum, nisi odio aperiam excepturi, laboriosam pariatur magni quam. Eius ipsa dolores sint exercitationem accusantium, soluta amet.',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid quos illum consequuntur ipsum, nisi odio aperiam excepturi, laboriosam pariatur magni quam. Eius ipsa dolores sint exercitationem accusantium, soluta amet.',
        image: require('../assets/osama.jpg')
    },

    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/osama.jpg')
    },
]

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refresing, setRefreshing] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => { }}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                }
                ItemSeparatorComponent={() => <ListItemSeparator />}
                refreshing={refresing}
                onRefresh={() => setMessages(
                    [
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/osama.jpg')
                        }
                    ]
                )
                }
            />
        </Screen>

    )
}

export default MessagesScreen

const styles = StyleSheet.create({})
