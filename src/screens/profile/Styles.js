import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:StatusBar.currentHeight-10,
    paddingHorizontal: 16,
    backgroundColor:'#FFF'
  },
  header :{
    alignItems:'flex-start',
    // backgroundColor:'red'
  },

  mainInfo:{
      alignItems:'center'
  },

  avatar:{
    backgroundColor:'#EBEEF2',
    width: 80,
    height:80,
    justifyContent:'center'
  },
  avatarIcon:{
    fontSize:52, 
    color:'#6379F4', 
    textAlign:"center",
    textAlignVertical:"center",
    
  },

  editWrapper:{
    flexDirection:'row',
    marginVertical:10,
    alignItems:'center',
    justifyContent:'space-between',
    width:50,
  },

  editIcon:{
    color:'#7A7886',
    fontSize:18,
  },
  
  editText:{
    color:'#7A7886',
    fontFamily: 'NunitoSans-Regular',
    fontSize:16
  },

  nameText:{
    fontFamily: 'NunitoSans-Bold',
    fontSize:24,
    color:"#4D4B57"
  },

  phoneText:{
    color:'#7A7886',
    fontFamily: 'NunitoSans-Regular',
    fontSize:16,
    marginVertical:10
  },

  menuSection:{
    marginTop:15
  },

  menuItem:{
    backgroundColor:'#E5E8ED',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:12,
    borderRadius:10,
    height:50,
    marginBottom:15,

  },

  menuText:{
    fontFamily: 'NunitoSans-Bold',
    fontSize:14,
    color: '#4D4B57',
  },

  menuNext:{
    color: '#4D4B57',
  }


});

export default styles;
