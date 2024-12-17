import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item: inspiration }) => {
        return (
            <ListItem>
                <Avatar source={inspiration.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{inspiration.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {inspiration.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList
            data={props.inspirations}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;