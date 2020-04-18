
# coding: utf-8

# In[23]:


import pandas as pd
import numpy as np


# In[2]:


cd D:\PROJECTS\ML_Codechef\MiniTask1\Mini-Tasks-20\Shruti_Shreya


# In[3]:


train_file=pd.read_csv("train.csv")
test_file=pd.read_csv("test.csv")


# In[5]:


train_file.info()


# In[6]:


test_file.info()


# In[8]:


train_file.isnull().sum()


# In[9]:


test_file.isnull().sum()


# In[28]:


import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')


# In[37]:


def chart(feature):
    survived=train_file[train_file['Survived']==1][feature].value_counts()
    dead=train_file[train_file['Survived']==0][feature].value_counts()
    survived.plot(kind='bar')
    


# In[31]:


train_file.groupby(['Survived','Sex'])['Survived'].count()


# In[38]:


chart('Sex')


# In[39]:


chart('Pclass')


# In[40]:


chart('SibSp')


# In[41]:


chart('Parch')


# In[42]:


chart('Embarked')


# In[45]:


train_file.Sex=train_file.Sex.astype("category")


# In[46]:


train_file.Sex=train_file.Sex.cat.codes


# In[47]:


train_file.head()


# In[49]:


train_file['Embarked']=train_file['Embarked'].astype('category')


# In[50]:


train_file['Embarked']=train_file['Embarked'].cat.codes


# In[51]:


train_file.head()


# In[60]:


test_file.Sex=test_file.Sex.astype("category")


# In[61]:


test_file.Sex=test_file.Sex.cat.codes


# In[62]:


test_file['Embarked']=test_file['Embarked'].astype("category")


# In[63]:


test_file['Embarked']=test_file['Embarked'].cat.codes


# In[64]:


test_file.head()


# In[66]:


train_test=[train_file,test_file]
for dataset in train_test:
    dataset['Title']=dataset['Name'].str.extract( ' ([A-Za-z]+)\.',expand=False)


# In[67]:


train_file['Title'].value_counts()


# In[68]:


test_file['Title'].value_counts()


# In[72]:


train_file.head(10)


# In[74]:


title_map={"Mr":0, "Mrs":1,"Mme":1,"Master":2,"Miss":3,"Ms":3,"Mlle":3, "Dr":4,"Rev":4,"Major":4,"Col":4,"Don":4,"Dona":4,"Countess":4,"Jonkheer":4,"Lady":4,"Sir":4,"Capt":4}
for dataset in train_test:
    dataset['Title']=dataset['Title'].map(title_map)


# In[75]:


train_file.head(10)


# In[76]:


test_file.head(10)


# In[77]:


chart('Title')


# In[78]:


train_file['Age'].fillna(train_file.groupby('Title')['Age'].transform("median"), inplace=True)
test_file['Age'].fillna(test_file.groupby('Title')['Age'].transform("median"), inplace=True)


# In[80]:


train_file.isnull().sum()


# In[81]:


test_file.isnull().sum()


# In[82]:


train_file['Fare'].fillna(train_file.groupby('Pclass')['Fare'].transform("median"), inplace=True)
test_file['Fare'].fillna(test_file.groupby('Pclass')['Fare'].transform("median"), inplace=True)


# In[83]:


test_file.isnull().sum()


# In[84]:


train_file['FamilySize']=train_file['SibSp']+train_file['Parch']+1
test_file['FamilySize']=test_file['SibSp']+test_file['Parch']+1


# In[85]:


train_file.head(10)


# In[86]:


test_file=test_file.drop(['Name','Ticket','Cabin','SibSp','Parch'],axis=1)


# In[90]:


train_file=train_file.drop(['Name','Ticket','Cabin','SibSp','Parch'],axis=1)


# In[93]:


train_file=train_file.drop(['PassengerId'],axis=1)
test_file=test_file.drop(['PassengerId'],axis=1)


# In[98]:


target=train_file['Survived']
train_file=train_file.drop('Survived',axis=1)


# In[102]:


train_file.head()

