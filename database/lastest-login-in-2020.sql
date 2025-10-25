-- 1890. The Latest Login in 2020

-- Table: Logins
-- +----------------+----------+
-- | Column Name    | Type     |
-- +----------------+----------+
-- | user_id        | int      |
-- | time_stamp     | datetime |
-- +----------------+----------+
-- (user_id, time_stamp) is the primary key (combination of columns with unique values) for this table.
-- Each row contains information about the login time for the user with ID user_id.
 

-- Write a solution to report the latest login for all users in the year 2020. Do not include the users who did not login in 2020.

-- Return the result table in any order.

-- The result format is in the following example.

 

-- Example 1:

-- Input: 
-- Logins table:
-- +---------+---------------------+
-- | user_id | time_stamp          |
-- +---------+---------------------+
-- | 6       | 2020-06-30 15:06:07 |
-- | 6       | 2021-04-21 14:06:06 |
-- | 6       | 2019-03-07 00:18:15 |
-- | 8       | 2020-02-01 05:10:53 |
-- | 8       | 2020-12-30 00:46:50 |
-- | 2       | 2020-01-16 02:49:50 |
-- | 2       | 2019-08-25 07:59:08 |
-- | 14      | 2019-07-14 09:00:00 |
-- | 14      | 2021-01-06 11:59:59 |
-- +---------+---------------------+
-- Output: 
-- +---------+---------------------+
-- | user_id | last_stamp          |
-- +---------+---------------------+
-- | 6       | 2020-06-30 15:06:07 |
-- | 8       | 2020-12-30 00:46:50 |
-- | 2       | 2020-01-16 02:49:50 |
-- +---------+---------------------+
-- Explanation: 
-- User 6 logged into their account 3 times but only once in 2020, so we include this login in the result table.
-- User 8 logged into their account 2 times in 2020, once in February and once in December. We include only the latest one (December) in the result table.
-- User 2 logged into their account 2 times but only once in 2020, so we include this login in the result table.
-- User 14 did not login in 2020, so we do not include them in the result table.
-- ================================================

-- Ok, steps that I'm gonna follow for solving this problem

-- 1. Exclude any user who has not logged in 2020
-- 2. Return latest (the most recent) login user row from the table

SELECT
    l.user_id,
    MAX(l.time_stamp) as last_stamp
FROM Logins l
WHERE
    l.time_stamp BETWEEN TO_TIMESTAMP('2020-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS') AND TO_TIMESTAMP('2020-12-31 23:59:59', 'YYYY-MM-DD HH24:MI:SS')
GROUP BY l.user_id

-- Comments
-- This leetcode is a bit buggy, I've finished it, but when trying the test
-- it showed that I passed 22 out of 24, so I searched a lot, in the end I've tried somethings
-- but no success, so I had to look in the comments section and see what people were doing
-- I just changed from TO_DATE to TO_TIMESTAMP, this little change made all tests passed

-- it seems that using TO_DATE the result was parsed correctly in the first condition
-- but in the second condition it was converted like '2020-12-31 00:00:00', ignoring every result from 31st December

-- Just a quick reminder:
-- Chatting more about with gemini, presenting to him my solution, he brought an interesting point
-- using BETWEEN can be risky sometimes, because it doesn't take in account milliseconds 
-- if a person logged in at '2020-12-31 23:59:59.500' it would be excluded from the result

-- so it's better to use >= and < for these kind of situations
-- example: 

WHERE
    l.time_stamp >= '2020-01-01 00:00:00'::timestamp
AND l.time_stamp <  '2021-01-01 00:00:00'::timestamp