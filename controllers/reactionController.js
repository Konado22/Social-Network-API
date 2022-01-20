const { Users, Thoughts, Reactions } = require('../models')
//all reactions
router.route('/').post(addReaction).delete(deleteReaction)
//add reaction
//update reaction
//create reaction
//delete reaction
module.exports = router
