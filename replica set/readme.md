
1. Run replica set with docker-compose
`docker-compose up -d`

2. Connect with replica set, using below connection string
`mongodb://localhost:27017,localhost:27018,localhost:27019/?replicaSet=rs0`

3. Check replica set status running in mongosh, eg. via Compass MongoDB and `>_MONGOSH`
`rs.status()`

4. In docker desktop switch **off** first node which is primary. Check in replica set status in mongosh
`rs.status()`

5. In docker desktop switch **on** first node. Check in replica set status in mongosh
`rs.status()`
Remember which node is currently primary.

6. In VS Code open `inserting.mongodb.js` file. Connect with replica set with above connection string.
Execute file with MongoDB for VS Code extension CTRL+SHIFT+P `MongoDB: Run All From Playground`.
It should start printing messages in the output tab.

7. In docker desktop switch **off** primary node (2 other nodes should be up and running).
Check replica set status in mongosh
`rs.status()`
Remember which node is currently primary.

8. In docker desktop switch **off** current primary node.
Check messeges printed in VS Code output tab.

9. In docker desktop switch **on** all nodes currently beeing down.
Check replica set status in mongosh
`rs.status()`

10. In VS Code cancel execution of the playground.