var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var characterSchema = new Schema({
  /*
  String
  Number
  Date
  Buffer
  Boolean
  Mixed
  ObjectId
  Array

  Number
    strength
    dexterity
    constitution
    intelligence
    wisdom
    charisma
    strengthMod
    dexterityMod
    constitutionMod
    intelligenceMod
    wisdomMod
    charismaMod
    proficiency
    strengthSave
    dexteritySave
    constitutionSave
    intelligenceSave
    wisdomSave
    charismaSave
    acrobatics
    animalHandling
    arcana
    athletics
    deception
    history
    insight
    intimidation
    investigation
    medicine
    nature
    perception
    performance
    persuasion
    religion
    slightOfHand
    stelth
    survival
    ac
    intititive
    speed
    hpMax
    hpCurrent
    hpTemp
    cp
    sp
    ep
    gp
    pp
    level
    experience
    dci
    attackBonusN
    spellSaveDC
    spellAttackBonus
    spellSlotsN
    cantripsKnown
    slotsExpendedN
    spellsKnownN
    passivePerception

  radio/boolean
    strengthSave
    dexteritySave
    constitutionSave
    intelligenceSave
    wisdomSave
    charismaSave
    acrobatics
    animalHandling
    arcana
    athletics
    deception
    history
    insight
    intimidation
    investigation
    medicine
    nature
    perception
    performance
    persuasion
    religion
    slightOfHand
    stelth
    survival
    inspiration

  textArea/string
    proficiencies
    languages
    equipment
    featuresTraits
    personalityTraits
    ideals
    bonds
    flaws

  text/string
    class
    race
    alignment
    background
    hitDie
    hitDieTotal
    attackNameN
    attackDamageN
    castingClass
    spellNameN
    cantripN
    playerName

  checkbox/boolean
    deathSave1
    deathSave2
    deathSave3
    deathFail1
    deathFail2
    deathFail3
    spellPreparedN

  noInput/Date
    created
    lastUpdated

  */
});
var Character = mongoose.model('Character', characterSchema);
module.exports = Character;
