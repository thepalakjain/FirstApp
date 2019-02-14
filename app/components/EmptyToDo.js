export default class EmptyToDo extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
         <Text style={styles.buttonText} > + Add something </Text>
        </TouchableOpacity>
      </View>
    );
  }
}